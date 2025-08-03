'use server';
/**
 * @fileOverview Generates professional-looking headshots for team members using AI.
 *
 * - generateTeamMemberHeadshots - A function that generates headshots for a list of team member names.
 * - GenerateTeamMemberHeadshotsInput - The input type for the generateTeamMemberHeadshots function.
 * - GenerateTeamMemberHeadshotsOutput - The return type for the generateTeamMemberHeadshots function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTeamMemberHeadshotsInputSchema = z.object({
  names: z
    .array(z.string())
    .describe('An array of team member names to generate headshots for.'),
});
export type GenerateTeamMemberHeadshotsInput = z.infer<
  typeof GenerateTeamMemberHeadshotsInputSchema
>;

const GenerateTeamMemberHeadshotsOutputSchema = z.object({
  headshots: z.array(
    z.object({
      name: z.string().describe('The name of the team member.'),
      photoDataUri: z
        .string()
        .describe(
          'A photo of the team member, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
        ),
    })
  ),
});
export type GenerateTeamMemberHeadshotsOutput = z.infer<
  typeof GenerateTeamMemberHeadshotsOutputSchema
>;

export async function generateTeamMemberHeadshots(
  input: GenerateTeamMemberHeadshotsInput
): Promise<GenerateTeamMemberHeadshotsOutput> {
  return generateTeamMemberHeadshotsFlow(input);
}

const generateTeamMemberHeadshotPrompt = ai.definePrompt({
  name: 'generateTeamMemberHeadshotPrompt',
  input: {schema: z.object({name: z.string()})},
  output: {schema: z.object({photoDataUri: z.string()})},
  prompt: `Generate a professional headshot for a person named {{{name}}}.  The image should be suitable for a corporate website. The background should be simple and neutral.

Output the image as a data URI.`,
});

const generateTeamMemberHeadshotsFlow = ai.defineFlow(
  {
    name: 'generateTeamMemberHeadshotsFlow',
    inputSchema: GenerateTeamMemberHeadshotsInputSchema,
    outputSchema: GenerateTeamMemberHeadshotsOutputSchema,
  },
  async input => {
    const headshots = await Promise.all(
      input.names.map(async name => {
        const {media} = await ai.generate({
          model: 'googleai/gemini-2.0-flash-preview-image-generation',
          prompt: `Generate a professional headshot for a person named ${name}. The image should be suitable for a corporate website. The background should be simple and neutral.`,  
          config: {
            responseModalities: ['TEXT', 'IMAGE'],
          },
        });
        return {name, photoDataUri: media!.url};
      })
    );
    return {headshots};
  }
);
