export declare class AudioService {
    private readonly logger;
    private _openai;
    private get openai();
    transcribe(filePath: string): Promise<string>;
    detectTrade(text: string): {
        trade: string;
        confidence: number;
    };
    generateTitle(transcription: string): string;
}
