
type Callback = () => any

interface IPollingService {
  start: (callback: Callback) => void;
  stop: () => void;
} 

const POLL_INTERVAL = 2000;

export class PollingService implements IPollingService{
  private static instance: PollingService
  private timer?: NodeJS.Timer;
  constructor() {
    if (!PollingService.instance) {
      PollingService.instance = this;
      this.timer = undefined;
    }
    return PollingService.instance;
  }

  public start(callback: Callback): void {
    this.timer = setInterval(callback, POLL_INTERVAL)
  }

  public stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

const pollingService = new PollingService();
export default pollingService;



type Listener<EventType> = (ev: EventType) => void;

interface IObserver<EventType> {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
}

function createObserver<EventType>(): IObserver<EventType> {
  let listeners: Listener<EventType>[] = [];
  return {
    subscribe: (listener: Listener<EventType>): () => void => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener)
      }
    },
    publish: (event: EventType) => {
      listeners.forEach((l) => l(event))
    }
  }
}