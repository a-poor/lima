import { Mail } from "@/components/mail-layout";


export function App() {
  return (
    <main className="h-screen w-screen">
      <Mail
        accounts={[
          {
            label: "Alicia Koch",
            email: "alicia@vercel.com",
            icon: (
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Vercel</title>
                <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
              </svg>
            ),
          },
          {
            label: "Alicia Koch",
            email: "alicia@gmail.com",
            icon: (
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Gmail</title>
                <path
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                  fill="currentColor"
                />
              </svg>
            ),
          },
        ]}
        mails={[
          {
            id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
            name: "William Smith",
            email: "williamsmith@example.com",
            subject: "Meeting Tomorrow",
            text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
            date: "2023-10-22T09:00:00",
            read: true,
            labels: ["meeting", "work", "important"],
          },
          {
            id: "110e8400-e29b-11d4-a716-446655440000",
            name: "Alice Smith",
            email: "alicesmith@example.com",
            subject: "Re: Project Update",
            text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
            date: "2023-10-22T10:30:00",
            read: true,
            labels: ["work", "important"],
          },
          {
            id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
            name: "Bob Johnson",
            email: "bobjohnson@example.com",
            subject: "Weekend Plans",
            text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
            date: "2023-04-10T11:45:00",
            read: true,
            labels: ["personal"],
          },
          {
            id: "61c35085-72d7-42b4-8d62-738f700d4b92",
            name: "Emily Davis",
            email: "emilydavis@example.com",
            subject: "Re: Question about Budget",
            text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
            date: "2023-03-25T13:15:00",
            read: false,
            labels: ["work", "budget"],
          },
        ]}
        defaultLayout={[265, 440, 655]}
        navCollapsedSize={4}
        chatCollapsedSize={0}
      />
    </main>
  );
}
