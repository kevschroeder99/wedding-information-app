import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  category: string;
  questions: { 
    question: string;
    answer: string;
  }[];
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  openCategories: boolean[] = []; // Corrected property name

  faqCategories: FaqItem[] = [
    {
      category: 'Allgemeine Fragen',
      questions: [
        {
          question: 'Wann und wo findet die Hochzeit statt?',
          answer: 'Die Hochzeit findet am Samstag, 23. August 2025 statt. Der genaue Ort kann unter dem Reiter "Location" eingesehen werden.'
        },
        {
          question: 'Gibt es ein bestimmtes Motto oder einen Dresscode?',
          answer: 'Es gibt keinen speziellen Dresscode.'
        },
        {
          question: 'Wie läuft der Hochzeitstag ab?',
          answer: 'Der genaue Zeitplan wird rechtzeitig vor der Hochzeit bekannt gegeben und ist unter "Zeitplan" zu finden. Der aktuelle Zeitplan ist noch ein Platzhalter!'
        }
      ]
    },
    {
      category: 'Anreise und Unterkunft',
      questions: [
        {
          question: 'Gibt es Parkmöglichkeiten in der Nähe der Location?',
          answer: 'Parkplätze stehen in der Nähe des Veranstaltungsortes zur Verfügung. Siehe "Location".'
        },
        {
          question: 'Gibt es Empfehlungen für Unterkünfte in der Nähe?',
          answer: 'Das Hotel Zum Zollhaus hat ein Kontingent für unsere Hochzeit reserviert. Das Kontingent reicht jedoch nicht für alle Gäste aus, daher gilt: Wer zuerst kommt, mahlt zuerst. Außerdem haben wir unter "Hotels" eine Liste mit verschiedenen Unterkünften gefunden.'
        },
        {
          question: 'Wie erreiche ich die Location mit öffentlichen Verkehrsmitteln?',
          answer: 'Die Anbindung an öffentliche Verkehrsmittel wird noch bekannt gegeben.'
        }
      ]
    },
    {
      category: 'Essen und Getränke',
      questions: [
        {
          question: 'Wird es ein Menü oder Buffet geben?',
          answer: 'Das Essen wird noch bekannt gegeben.'
        },
        {
          question: 'Gibt es vegetarische/vegane/andere spezielle Optionen?',
          answer: 'Wir werden verschiedene Ernährungsoptionen berücksichtigen. Bitte gebt bei der Anmeldung Eure Präferenzen an.'
        },
        {
          question: 'Können wir Lebensmittelallergien oder Unverträglichkeiten melden?',
          answer: 'Ja, bitte gebt Allergien oder Unverträglichkeiten im Anmeldeformular an.'
        }
      ]
    },
    {
      category: 'Kinder und Begleitung',
      questions: [
        {
          question: 'Sind Kinder auf der Hochzeit willkommen?',
          answer: 'Kinder sind natürlich willkommen!'
        },
        {
          question: 'Darf ich eine Begleitung mitbringen?',
          answer: 'Eine Begleitperson kann mitgebracht werden.'
        }
      ]
    },
    {
      category: 'Sonstiges',
      questions: [
        {
          question: 'Wann ist der letzte Tag, um zu- oder abzusagen?',
          answer: 'Wir bitten um Rückmeldung bis März 2025.'
        },
        {
          question: 'Was ist, wenn ich kurzfristig absagen muss?',
          answer: 'Bitte kontaktiert uns so früh wie möglich bei Änderungen.'
        },
        {
          question: 'Gibt es einen Hochzeitswunsch oder eine Geschenkliste?',
          answer: 'Details zu Geschenkwünschen werden noch bekannt gegeben.'
        },
        {
          question: 'Wird es einen Fotografen geben, und können wir Bilder machen?',
          answer: 'Details zur fotografischen Begeleitung wird noch bekannt gegeben.'
        }
      ]
    }
  ];

  constructor() {
    // Initialize all categories as closed
    this.openCategories = this.faqCategories.map(() => false);
  }

  toggleCategory(index: number): void {
    this.openCategories[index] = !this.openCategories[index];
  }
}
