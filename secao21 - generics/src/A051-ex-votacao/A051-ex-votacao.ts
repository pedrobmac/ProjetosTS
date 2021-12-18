type PollOption = {
  option: string;
  votes: number;
};

export class Poll {
  private _pollOptions: PollOption[] = [];
  constructor(public question: string) {}

  addPollOption(option: string): void {
    const pollOption: PollOption = {
      option: option,
      votes: 0,
    };

    this._pollOptions.push(pollOption);
  }

  vote(voteIndex: number): void {
    if (!this._pollOptions[voteIndex]) return;
    this._pollOptions[voteIndex].votes += 1;
  }

  get pollOptions(): PollOption[] {
    return this._pollOptions;
  }
}

//classe Poll é injetada na classe PollApp
export class PollApp {
  private votes: Poll[] = [];

  addPoll(vote: Poll): void {
    this.votes.push(vote);
  }

  showVotes(): void {
    for (const poll of this.votes) {
      console.log(poll.question);
      for (const pollOption of poll.pollOptions) {
        console.log(pollOption.option, pollOption.votes);
      }
      console.log('--------------');
    }
  }
}

const poll1 = new Poll('Qual sua linguagem de programação favorita?');
poll1.addPollOption('Python');
poll1.addPollOption('JavaScript');
poll1.addPollOption('TypeScript');

poll1.vote(0); //computa cada voto pelo índice da opção
poll1.vote(2);
poll1.vote(0);
poll1.vote(1);
poll1.vote(2);
poll1.vote(2);
poll1.vote(1);

//----------------

const poll2 = new Poll('Qual sua cor favorita?');
poll2.addPollOption('Azul');
poll2.addPollOption('Verde');
poll2.addPollOption('Rosa');
poll2.addPollOption('Marrom');

poll2.vote(0);
poll2.vote(2);
poll2.vote(1);
poll2.vote(0);
poll2.vote(2);
poll2.vote(1);
poll2.vote(1);

const pollApp1 = new PollApp();
pollApp1.addPoll(poll1);
pollApp1.addPoll(poll2);

pollApp1.showVotes();
