import { 
  masterclassRegistrations, 
  contactMessages,
  type MasterclassRegistration, 
  type InsertMasterclassRegistration,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Masterclass registration methods
  createMasterclassRegistration(registration: InsertMasterclassRegistration): Promise<MasterclassRegistration>;
  getMasterclassRegistrations(): Promise<MasterclassRegistration[]>;
  getMasterclassRegistrationByEmail(email: string): Promise<MasterclassRegistration | undefined>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getMasterclassRegistrations(): Promise<MasterclassRegistration[]> {
    return await db.select().from(masterclassRegistrations);
  }

  async getMasterclassRegistrationByEmail(email: string): Promise<MasterclassRegistration | undefined> {
    const [registration] = await db.select().from(masterclassRegistrations).where(eq(masterclassRegistrations.email, email));
    return registration || undefined;
  }

  async createMasterclassRegistration(insertRegistration: InsertMasterclassRegistration): Promise<MasterclassRegistration> {
    const [registration] = await db
      .insert(masterclassRegistrations)
      .values(insertRegistration)
      .returning();
    return registration;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }
}

export const storage = new DatabaseStorage();
