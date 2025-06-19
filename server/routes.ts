import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMasterclassRegistrationSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Masterclass registration endpoint
  app.post("/api/masterclass-registration", async (req, res) => {
    try {
      const validatedData = insertMasterclassRegistrationSchema.parse(req.body);
      
      // Check if email already exists
      const existingRegistration = await storage.getMasterclassRegistrationByEmail(validatedData.email);
      if (existingRegistration) {
        return res.status(400).json({ 
          message: "Email already registered for the masterclass. Please use a different email address." 
        });
      }

      const registration = await storage.createMasterclassRegistration(validatedData);
      
      // Mock email confirmation (in real app, this would send an actual email)
      console.log(`Confirmation email sent to ${registration.email} for masterclass registration`);
      
      res.status(201).json({ 
        message: "Registration successful! You will receive a confirmation email with venue details.",
        registration: {
          id: registration.id,
          fullName: registration.fullName,
          email: registration.email,
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid registration data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact message endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Mock email notification (in real app, this would send an actual email)
      console.log(`New contact message from ${message.email}: ${message.subject}`);
      
      res.status(201).json({ 
        message: "Message sent successfully! We'll get back to you within 24 hours.",
        messageId: message.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid message data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get masterclass registrations (for admin purposes)
  app.get("/api/masterclass-registrations", async (req, res) => {
    try {
      const registrations = await storage.getMasterclassRegistrations();
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
