import { Injectable } from '@angular/core';


export interface CalendarEvent {
  title: string;
  description?: string;
  location?: string;
  startTime: Date;
  endTime: Date;
}


@Injectable({
  providedIn: 'root'
})

export class IcsService {
  /**
   * Generate an ICS file content for a calendar event
   * @param event The calendar event details
   * @returns Formatted ICS file content
   */
  generateIcsContent(event: CalendarEvent): string {
    const formatDate = (date: Date): string => {
      return date.toISOString().replace(/[-:]|\.\d{3}/g, '');
    };

    // Create reminders
    const reminderDates = [
      new Date(event.startTime.getTime() - 182 * 24 * 60 * 60 * 1000), // 6 months before
      new Date(event.startTime.getTime() - 92 * 24 * 60 * 60 * 1000), // 3 months before
      new Date(event.startTime.getTime() - 14 * 24 * 60 * 60 * 1000) // 2 weeks before
    ];

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Invitation//Event Calendar//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${this.escapeIcsString(event.title)}`,
      event.description ? `DESCRIPTION:${this.escapeIcsString(event.description)}` : '',
      event.location ? `LOCATION:${this.escapeIcsString(event.location)}` : '',
      `DTSTART;VALUE=DATE:${formatDate(event.startTime).split('T')[0]}`,
      `DTEND;VALUE=DATE:${formatDate(new Date(event.startTime.getTime() + 24 * 60 * 60 * 1000)).split('T')[0]}`,
      ...reminderDates.flatMap(reminderDate => [
        `BEGIN:VALARM`,
        `ACTION:DISPLAY`,
        `DESCRIPTION:Reminder for Hochzeit Sinje & Kevin`,
        `TRIGGER:-P${Math.floor((event.startTime.getTime() - reminderDate.getTime()) / (24 * 60 * 60 * 1000))}D`,
        `X-WR-ALARMUID:${this.generateUniqueId()}`,
        `END:VALARM`
      ]),
      'END:VEVENT',
      'END:VCALENDAR'
    ].filter(line => line !== '').join('\r\n');

    return icsContent;
  }

  /**
   * Download ICS file for a calendar event
   * @param event The calendar event details
   * @param filename Optional filename for the ICS file
   */
  downloadIcsFile(event: CalendarEvent, filename?: string): void {
    const icsContent = this.generateIcsContent(event);
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    
    //const defaultFilename = `${event.title.replace(/\s+/g, '_')}_event.ics`;
    const finalFilename = filename || 'Hochzeit_Sinje_Kevin.ics';

    const link = document.createElement('a');
    link.href = url;
    link.download = finalFilename;
    link.click();
    
    // Clean up
    window.URL.revokeObjectURL(url);
  }

  /**
   * Escape special characters in ICS file
   * @param input String to escape
   * @returns Escaped string
   */
  private escapeIcsString(input: string): string {
    return input
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  }
  
  // Generate a unique ID for alarms
  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
}
