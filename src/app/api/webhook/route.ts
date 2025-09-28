// app/api/webhook/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define the schema for the incoming webhook data
const WebhookDataSchema = z.object({
  title: z.string(),
  // NOTE: Your workflow only sends the 'content' string from the processor.
  // The 'content' should contain a strict JSON string if you want to validate
  // against a complex schema like the one below.
  // Based on your workflow, the POST body is the raw text from the processor.
  // If the processor outputs JSON like:
  // {"title": "...", "description": "...", "budget": 100}
  // then the full schema is appropriate.
  //
  // *** ASSUMING THE GEMINI PROCESSOR OUTPUTS A JSON OBJECT ***
  description: z.string(),
  budget: z.number(),
  deadline: z.string(),
  category: z.enum(['design', 'development', 'writing', 'marketing', 'video', 'audio', 'other']),
  skills: z.array(z.string()),
});

// Helper function for processing logic
async function processWebhookData(data: z.infer<typeof WebhookDataSchema>) {
    console.log("Saving bounty to database/service:", data.title);
    await postBountyToServer(data);
}

// 💡 NEW: Handle POST requests (This matches your workflow's Post Result method)
export async function POST(req: NextRequest) {
  console.log('=== WEBHOOK POST REQUEST RECEIVED ===');
  try {
    // 1. Read body strictly as raw text so we can log it exactly as sent
    const textBody = await req.text();
    console.log('Raw incoming text body:', textBody);

    // 2. Best-effort parse for visibility only (no validation, no rejection)
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(textBody);
      console.log('Parsed JSON body (best-effort):', parsed);
    } catch {
      console.log('Body is not valid JSON. Proceeding with raw text only.');
    }

    // 3. Respond success and echo back
    console.log('=== WEBHOOK POST LOGGED SUCCESSFULLY ===');
    const responsePayload = {
      message: 'Webhook received and logged',
      receivedAt: new Date().toISOString(),
      contentType: req.headers.get('content-type') || null,
      rawText: textBody,
      parsedJson: parsed
    };
    console.log('Response payload:', responsePayload);
    return NextResponse.json(responsePayload, { status: 200 });

  } catch (error) {
    console.error('=== WEBHOOK POST PROCESSING ERROR ===');
    console.error('Error details:', error);

    return NextResponse.json({
      error: 'Internal Server Error',
      receivedAt: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  console.log('=== WEBHOOK GET REQUEST RECEIVED ===');
  console.log('Full URL:', req.url);
  console.log('Timestamp:', new Date().toISOString());
  
  return NextResponse.json({
    message: 'Webhook endpoint is working! Use POST method to send data.',
    endpoint: '/api/webhook',
    methods: ['GET', 'POST'],
    receivedAt: new Date().toISOString()
  }, { status: 200 });
}


// Mock server-safe function to handle the bounty logic
async function postBountyToServer(data: any) {
    // A database save would happen here.
    console.log("Saving bounty to database/service (Mock):", data.title);
}