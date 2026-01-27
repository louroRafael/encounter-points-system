import { Component } from '@angular/core';
import { FaqCard } from '../faq-card/faq-card';

@Component({
  selector: 'app-faq',
  imports: [
    FaqCard
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqList = [
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    }
  ];
}
