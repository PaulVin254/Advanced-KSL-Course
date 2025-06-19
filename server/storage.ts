import { 
  masterclassRegistrations, 
  contactMessages,
  type MasterclassRegistration, 
  type InsertMasterclassRegistration,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // Masterclass registration methods
  createMasterclassRegistration(registration: InsertMasterclassRegistration): Promise<MasterclassRegistration>;
  getMasterclassRegistrations(): Promise<MasterclassRegistration[]>;
  getMasterclassRegistrationByEmail(email: string): Promise<MasterclassRegistration | undefined>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private masterclassRegistrations: Map<number, MasterclassRegistration>;
  private contactMessages: Map<number, ContactMessage>;
  private currentRegistrationId: number;
  private currentMessageId: number;

  constructor() {
    this.masterclassRegistrations = new Map();
    this.contactMessages = new Map();
    this.currentRegistrationId = 1;
    this.currentMessageId = 1;
  }

  async createMasterclassRegistration(insertRegistration: InsertMasterclassRegistration): Promise<MasterclassRegistration> {
    const id = this.currentRegistrationId++;
    const registration: MasterclassRegistration = {
      id,
      fullName: insertRegistration.fullName,
      email: insertRegistration.email,
      phone: insertRegistration.phone,
      kslLevel: insertRegistration.kslLevel,
      motivation: insertRegistration.motivation || null,
      consent: insertRegistration.consent ?? "true",
      createdAt: new Date(),
    };
    this.masterclassRegistrations.set(id, registration);
    return registration;
  }

  async getMasterclassRegistrations(): Promise<MasterclassRegistration[]> {
    return Array.from(this.masterclassRegistrations.values());
  }

  async getMasterclassRegistrationByEmail(email: string): Promise<MasterclassRegistration | undefined> {
    return Array.from(this.masterclassRegistrations.values()).find(
      (registration) => registration.email === email,
    );
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
