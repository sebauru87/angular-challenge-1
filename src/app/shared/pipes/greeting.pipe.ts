import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  getRandomMessage(username: string): string {
    const welcomeMessages = [
      `Hello ${username} the greatest`,
      `Hey ${username}, this will be a beautiful day`,
      `Cheers ${username}, you rock!`,
    ];

    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    return welcomeMessages[randomIndex];
  }

  transform(username: string): string {
    return this.getRandomMessage(username);
  }
}
