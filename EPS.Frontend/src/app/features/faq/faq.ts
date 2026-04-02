import { Component } from '@angular/core';
import { FaqCard } from './components/faq-card/faq-card';
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
      question: 'Lorem ipsum dolor sit amet, consectetur?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    }
  ];
}
