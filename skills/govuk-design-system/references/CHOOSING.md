# Choosing components and patterns

Every "when to use" and "when not to use" from the Design System in one place. Scan this to pick, then open the page in `references/` for the markup.

## Components

### Accordion

`references/components/accordion.md` — The accordion component lets users show and hide sections of related content on a page

**Use when:** Only use an accordion if there's evidence it’s helpful for the user to:
- see an overview of multiple, related sections of content
- choose to show and hide sections that are relevant to them
- look across information that might otherwise be on different pages
For example, an accordion can work well if the user needs to reveal and compare information that’s relevant to them.
Accordions can also work well for people who use a service regularly. For example, users of caseworking systems who need to do familiar tasks quickly.
Test with users to decide if using an accordion outweighs the potential problems with hiding content.

**Do not use when:** Accordions hide content from the user. Not all users will notice them or understand how they work. For this reason, you should only use them in specific situations and if user research supports it.
Do not use an accordion for content that all users need to see.
Test your content without an accordion first. Well-written and structured content, as shown in [GOV.UK writing standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/), can remove the need to use an accordion.
It’s usually better to:
- simplify and reduce the amount of content
- split the content across multiple pages
- keep the content on a single page, separated by headings
- use a list of links at the start of the page (known as 'anchor links') to take the user to particular sections of a page
Accordions work best for simple content and links. Do not use accordions to split up a series of questions. Use separate pages instead.
Do not put accordions within accordions, as it will make content difficult to find.
Do not use the accordion component if the amount of content inside will make the page slow to load.

### Back link

`references/components/back-link.md` — Use the back link component to help users go back to the previous page in a multi-page transaction

**Use when:** Always include the Back link component on GOV.UK [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/).
You can include a back link on other pages within a multi-page transaction, if it makes sense to do so.

**Do not use when:** Never use the back link component together with the [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/). If necessary, you should do research with your users to learn which they find more helpful in your service.

### Breadcrumbs

`references/components/breadcrumbs.md` — Help users orientate themselves and navigate pages within a hierarchical structure

**Use when:** Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.

**Do not use when:** Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.
If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.

### Button

`references/components/button.md` — Use the button component to help users carry out an action

**Use when:** Use the button component to help users carry out an action like starting an application or saving their information.

### Character count

`references/components/character-count.md` — Tell users how many characters or words they can enter into a textarea

**Use when:** Always test your service without a character count first.
Only use the character count component when there is a good reason for limiting the number of characters users can enter. For example, if there is:
- evidence that users are likely to enter more information than they need to
- a legal or technical reason that means an entry must be no more than a certain number of characters

**Do not use when:** If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.

### Checkboxes

`references/components/checkboxes.md` — Let users select one or more options by using the checkboxes component

**Use when:** Use the checkboxes component when you need to help users:
- select multiple options from a list
- toggle a single option on or off

**Do not use when:** Do not use the checkboxes component if users can only choose one option from a selection. In this case, use the [Radios component](https://design-system.service.gov.uk/components/radios/).

### Cookie banner

`references/components/cookie-banner.md` — Allow users to accept or reject cookies which are not essential to making your service work.

**Use when:** Use this component if your service sets any cookies on a user’s device.
Remember, you must:
- tell users about the cookies your service sets on their device
- let users accept or reject any cookies that are not essential to providing your service
The term ‘non-essential cookies’ includes:
- HTML5 local storage
- service workers
- any other technologies that store files on the user’s device
This cookie banner and the [Cookies page pattern](https://design-system.service.gov.uk/patterns/cookies-page/) are based on the approach to getting cookie consent used on the GOV.UK website.
This component page shows several options for using a cookie banner, based on the types of cookies you’re using in the service. We also tell you what to cover in your cookie banner, with some text examples.
### Before you start
[Audit and categorise your cookies](https://design-system.service.gov.uk/patterns/cookies-page/#auditing-and-categorising-your-cookies) as shown in the cookies page pattern to help you choose the best option for your service.
You must not take the information on this page as legal advice. Your organisation is responsible and accountable for what they do to comply with data protection legislation, such as:
- Privacy and Electronic Communications Regulations (PECR)
- General Data Protection Regulation (GDPR)
Check with your organisation's privacy expert to see how data protection legislation affects your website and service.

### Date input

`references/components/date-input.md` — Use the date input component to help users enter a memorable date

**Use when:** Use the date input component when you’re asking users for a date they’ll already know, or can look up without using a calendar.

**Do not use when:** Do not use the date input component if users are unlikely to know the exact date of the event you’re asking about.
Read more in the [Ask users for dates pattern](https://design-system.service.gov.uk/patterns/dates/).

### Details

`references/components/details.md` — Make a page easier to scan by letting users reveal more detailed information only if they need it

**Use when:** Use the details component to make a page easier to scan when it contains information that only some users will need.

**Do not use when:** Do not use the details component to hide information that the majority of your users will need.

### Error message

`references/components/error-message.md` — When there's a validation error, use an error message to explain what went wrong and how to fix it

**Use when:** Show an error message next to the field and in the [Error summary component](https://design-system.service.gov.uk/components/error-summary/) when there is a validation error.
Use standard messages for different components.

**Do not use when:** Do not use error messages to tell a user that they are not eligible or do not have permission to do something. Or to tell them about a lack of capacity or other problem the user cannot fix - because the problem is with the service rather than with the information the user has provided.
Instead, take the user to a page that explains the problem (for example, telling them why they’re not eligible) and provides useful information about what to do next.
There are separate patterns for:
- ['There is a problem with the service' pages](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/)
- ['Page not found' pages](https://design-system.service.gov.uk/patterns/page-not-found-pages/)
- ['Service unavailable' pages](https://design-system.service.gov.uk/patterns/service-unavailable-pages/)

### Error summary

`references/components/error-summary.md` — Use an error summary when there is a validation error

**Use when:** Always show an error summary when there is a validation error, even if there’s only one.

### Exit this page

`references/components/exit-this-page.md` — Give users a way to quickly and safely exit a service, website or application.

**Use when:** Use the component on pages with sensitive information that could:
- put someone at risk of abuse or retaliation
- reveal someone’s plans to avoid or escape from harm
For example, when a potential victim is using a service to help them leave a domestic abuser.
You can use this component on either:
- all the pages in a service
- parts of the journey with sensitive information
You can also use this component for standalone content pages, such as dashboards and guidance.

**Do not use when:** Do not use this component if the service or content is unlikely to put a user at risk. See the [Exit a page quickly pattern](https://design-system.service.gov.uk/patterns/exit-a-page-quickly/) for examples of at-risk and sensitive topics.
The 'Exit this page' component is a [Button component](https://design-system.service.gov.uk/components/button/) that has been marked up with addtional CSS and JavaScript functionality, to make it work in a specific way.
Keep in mind that seeing this component might discourage certain users from using your service. If the user does not identify themselves as being at risk, they might see the button on a service and decide it’s not relevant to them.

### Feedback

`references/components/feedback.md` — Ask users to give their feedback about your service at any point of the journey

**Use when:** Use the Feedback component to give users the opportunity to give feedback at any point in their journey. This helps you gather a wide range of feedback to understand how well your service performs and improvements you can make.

### Fieldset

`references/components/fieldset.md` — Use the fieldset component to group related form inputs

**Use when:** Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when [asking for an address in your service](https://design-system.service.gov.uk/patterns/addresses/).
HTML:
If you’re using the examples or macros for a [Radios component](https://design-system.service.gov.uk/components/radios/), [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) or [Date input component](https://design-system.service.gov.uk/components/date-input/), the fieldset will already be included.

### File upload

`references/components/file-upload.md` — Help users select and upload a file

**Use when:** You should only ask users to upload something if it’s critical to the delivery of your service.
We improved the component in March 2025, so you’ll need to enable the [improved File upload component](#using-the-improved-file-upload-component) as a new feature.
Read a blog post about [design tips for helping users upload things](https://designnotes.blog.gov.uk/2017/02/14/some-design-tips-for-uploading-things/).

### GOV.UK footer

`references/components/footer.md` — The footer provides copyright, licensing and other information about your service and department

**Use when:** Use the footer at the bottom of every page of your service.

### Generic header

`references/components/generic-header.md` — A generic header to help services not on GOV.UK

**Use when:** Use the Generic header component if your service is both:
- a public-facing government service
- not on the GOV.UK website (meaning that your service is not part of the [GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition/govuk-proposition))
This is to bring consistency and maintain user trust in journeys that move between the GOV.UK website and other government websites and services.
This component also helps ensure your non-GOV.UK service does not:
- identify itself as being part of GOV.UK
- use the crown or GOV.UK logotype in the header
- use the GDS Transport typeface
- use the [GOV.UK brand colours](https://brand.design-system.service.gov.uk/colour/govuk-blue/)
See the guidance on [if your service is not on GOV.UK in the Service manual](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk).

**Do not use when:** If your service is hosted on one of these gov.uk domains, you must use the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) instead:
- gov.uk/[myservice]
- [myservice].service.gov.uk
- [myblog].blog.gov.uk

### GOV.UK header

`references/components/header.md` — The GOV.UK header shows users that they are on GOV.UK

**Use when:** If your service is being hosted on one of these domains, use the GOV.UK header component:
- gov.uk/[myservice]
- [myservice].service.gov.uk
- [myblog].blog.gov.uk
You must use the GOV.UK header component at the top of every page. This is to maintain user trust as they move around the GOV.UK website and other government websites and services.
The Service Manual explains why it’s important for you to [make your service look like GOV.UK](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk).

**Do not use when:** If your service is not hosted on one of the gov.uk domains outlined, you must not use the GOV.UK header component as it’s not considered part of GOV.UK.
Use the [Generic header component](https://design-system.service.gov.uk/components/generic-header/) instead to show your own organisation’s branding.

### Inset text

`references/components/inset-text.md` — Use the inset text component to differentiate a block of text from the content that surrounds it

**Use when:** Use the inset text component to differentiate a block of text from the content that surrounds it, for example:
- quotes
- examples
- additional information about the page

**Do not use when:** Some users do not notice inset text if it’s used on complex pages or near to other visually prominent elements. For this reason, avoid using inset text as a way of highlighting very important information that users need to see.
If you need to draw attention to very important content, like legal information, use the [Warning text component](https://design-system.service.gov.uk/components/warning-text/) instead.

### Language navigation

`references/components/language-navigation.md` — The Language navigation component helps users choose and switch between languages when using a service.

**Use when:** Use the Language navigation component when you can provide your service in more than one language.
For example, to help users switch from a page in English to a version of the same page in Welsh.
How you use this component will depend on whether you offer a choice of languages for:
- [specific pages within your service](#if-you-only-offer-specific-pages-in-another-language)
- [your whole service](#if-you-offer-your-whole-service-in-another-language)

**Do not use when:** Do not use this component unless you can provide all the same key information on a page in another language.

### Notification banner

`references/components/notification-banner.md` — Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content

**Use when:** A notification banner lets you tell the user about something that’s not directly relevant to the thing they’re trying to do on that page of the service. For example:
- telling the user about a problem that’s affecting the service as a whole (for example, delays in processing applications because of an emergency)
- telling the user about something that affects them in particular (for example, an approaching deadline they need to meet)
- telling the user about the outcome of something they've just done on a previous page (for example, confirming that an email has been sent)

**Do not use when:** Use notification banners sparingly. There’s [evidence that people often miss them](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/), and using them too often is likely to make this problem worse.
If the information is directly relevant to the thing the user is doing on that page, put the information in the main page content instead. Use an [Inset text component](https://design-system.service.gov.uk/components/inset-text/) or [Warning text component](https://design-system.service.gov.uk/components/warning-text/) if it needs to stand out.
Do not:
- use a notification banner to tell the user about validation errors - use an [Error message component](https://design-system.service.gov.uk/components/error-message/) and [Error summary component](https://design-system.service.gov.uk/components/error-summary/) instead
- show a notification banner and an [Error summary component](https://design-system.service.gov.uk/components/error-summary/) on the same page - just show the error summary

### Pagination

`references/components/pagination.md` — Help users navigate collections of numbered pages like search results

**Use when:** Consider using pagination when:
- showing all the content on a single page makes the page take too long to load
- most users will only need the content on the first page or first few pages

**Do not use when:** Only break up content onto separate pages if it improves the performance or usability of your service.
Avoid using the 'infinite scroll' technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users.
Do not use this Pagination component for linear journeys – for example, where you’re asking the user to complete a form. Instead, use the [Button component](https://design-system.service.gov.uk/components/button/) (usually a 'Continue' button) to let the user move to the next page – and a [Back link component](https://design-system.service.gov.uk/components/back-link/) to let them move to the previous page.

### Panel

`references/components/panel.md` — Use the Panel component to display important information in within confirmation and interruption pages

**Use when:** Use the Panel component to display important information within:
- [Confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages/), which tell the user they’ve successfully completed the transaction
- [Interruption pages](https://design-system.service.gov.uk/patterns/interruption-pages/), which pause the user journey to give important information

**Do not use when:** Never use the Panel component to highlight any other information.

### Password input

`references/components/password-input.md` — Help users accessibly enter passwords

**Use when:** Use this component whenever you need users to create or enter a password.
Before using this component, you should also read the guidance on the [Ask users for passwords pattern](https://design-system.service.gov.uk/patterns/passwords/) and [Creating user accounts pattern](https://design-system.service.gov.uk/patterns/create-accounts/).

**Do not use when:** Do not use this component to ask for any information other than a password.
Use a [Text input component](https://design-system.service.gov.uk/components/text-input/) to ask for other security information, such as:
- multi-factor authentication codes
- answers to security questions
- other personally identifiable information
Also see the [Confirm a phone number pattern](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/).

### Phase banner

`references/components/phase-banner.md` — Use the phase banner component to show users your service is still being worked on

**Use when:** Services hosted on a service.gov.uk domain must use the phase banner until they pass a live assessment.

### Radios

`references/components/radios.md` — Let users select a single option from a list using the radios component

**Use when:** Use the radios component when users can only select one option from a list.

**Do not use when:** Do not use the radios component if users might need to select more than one option. In this case, you should use the [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) instead.

### Select

`references/components/select.md` — Help users select an item from a list

**Use when:** The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.

**Do not use when:** The select component allows users to choose an option from a long list. Before using the select component, try asking users questions which will allow you to present them with fewer options.
Asking questions means you’re less likely to need to use the select component, and can consider using a different solution, such as a [Radios component](https://design-system.service.gov.uk/components/radios/).

### Service navigation

`references/components/service-navigation.md` — Service navigation helps users understand that they’re using your service and lets them navigate around your service

**Use when:** Use the Service navigation to help users understand that they’re using your service.
To decide when to use navigation links in your service, see the [Help users to navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

### Skip link

`references/components/skip-link.md` — Use the skip link component to help keyboard-only users skip to the main content on a page

**Use when:** All GOV.UK pages must include a skip link. Usually, you should place the skip link immediately after the opening `<body>` tag. However, if you're using a [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/), place the skip link immediately after the cookie banner.
Some automated accessibility testing tools may warn that the skip link element is not inside a landmark. This warning does not apply to skip links, so you can ignore it. Do not wrap the skip link in a `<nav>` region, or move it inside the header.

### Summary list

`references/components/summary-list.md` — Use the summary list to summarise information, for example, a user’s responses at the end of a form.

**Use when:** Use a summary list to show information as a list of key facts.
You can use it to display metadata like ‘Last updated’ with a date like ‘22 June 2018’, or to summarise a user’s responses at the end of a form like the [Check answers pattern](https://design-system.service.gov.uk/patterns/check-answers/).
[Summary cards are a variant within this component](#summary-cards). You can use summary cards to show multiple summary lists that describe the same type of thing, such as people. You can also add card actions that apply to the entire summary list.

**Do not use when:** The summary list uses the description list (`<dl>`) HTML element, so only use it to present information that has a key and at least one value.
Do not use it for tabular data or a simple list of information or tasks, like a [Task list component](https://design-system.service.gov.uk/components/task-list/). For those use a `<table>`, `<ul>` or `<ol>`.

### Table

`references/components/table.md` — Use the table component to make information easier to compare and scan for users

**Use when:** Use the table component to let users compare information in rows and columns.

**Do not use when:** Never use the table component to layout content on a page. Instead, use the [grid system](https://design-system.service.gov.uk/styles/layout/#using-the-grid-system).

### Tabs

`references/components/tabs.md` — Tabs can be a helpful way of letting users quickly switch between related information

**Use when:** Tabs can be a helpful way of letting users quickly switch between related information if:
- your content can be usefully separated into clearly labelled sections
- the first section is more relevant than the others for most users
- users will not need to view all the sections at once
Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use.

**Do not use when:** Do not use the tabs component if the total amount of content the tabs contain will make the page slow to load. For this reason, do not use the tabs component as a form of page navigation.
Tabs hide content from users and not everyone will notice them or understand how they work.
Do not use tabs if your users might need to:
- read through all of the content in order, for example, to understand a step-by-step process
- compare information in different tabs - having to memorise the information and switch backwards and forwards can be frustrating and difficult
Test your content without tabs first. Consider if it’s better to:
- simplify and reduce the amount of content
- split the content across multiple pages
- keep the content on a single page, separated by headings
- use a table of contents to let users navigate quickly to specific sections of content

### Tag

`references/components/tag.md` — The Tag component indicates the status of something, such as an item on a task list or a phase banner

**Use when:** Use the Tag component when it’s possible for something to have more than one status and it’s useful for the user to know about that status. For example, you can use a tag to show whether an item in a [Task list component](https://design-system.service.gov.uk/components/task-list/) has been ‘completed’.

### Task list

`references/components/task-list.md` — The task list component displays all the tasks a user needs to do, and allows users to easily identify which ones are done and which they still need to do.

**Use when:** Use the task list to give users more control over how they complete long, complex services.
Only use the task list if there’s evidence that users:
- do not want to, or cannot, complete all the tasks in one sitting
- need to be able to choose the order they complete the tasks in

**Do not use when:** Try to simplify the service before you use a task list. If you’re able to reduce the number of tasks or steps involved, you might not need one.
Do not use the task list for a long service that needs to be completed in a specific order. If it needs to be completed over multiple sessions, consider allowing users to save their progress, and then to continue where they left off when they return. Use the start page to explain what users will be expected to do during the service.
The task list should not be used as a way of showing users their answers. For this, you should use a [Summary list component](https://design-system.service.gov.uk/components/summary-list/) instead.

### Text input

`references/components/text-input.md` — Help users enter information with the text input component

**Use when:** Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

**Do not use when:** Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the [Textarea component](https://design-system.service.gov.uk/components/textarea/).

### Textarea

`references/components/textarea.md` — Help users provide detailed information using the textarea component

**Use when:** Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.

**Do not use when:** Users can find open-ended questions difficult to answer. It might be better to break up one complex question into a series of simple ones, for example where users can select from options using a [Radios component](https://design-system.service.gov.uk/components/radios/).
### If you need to ask an open question
Do not use the textarea component if you need to let users enter shorter answers no longer than a single line, such as a phone number or name. In this case, you should use the [Text input component](https://design-system.service.gov.uk/components/text-input/).

### Warning text

`references/components/warning-text.md` — Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take

**Use when:** Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might&nbsp;take.

## Patterns

### Addresses

`references/patterns/addresses.md` — Help users provide an address

### Bank details

`references/patterns/bank-details.md` — How to ask users for their bank details

**Use when:** Follow this pattern if you need users to provide their bank details so you can pay them.
Only ask for bank details securely within your service. For example, do not ask users to send their bank details by email.
This pattern does yet not cover asking users for bank details so they can pay by Direct Debit.
If your service lets users set up Direct Debit payments, first check if you can use [GOV.UK Pay](https://www.payments.service.gov.uk/direct-debit/).

### Check a service is suitable

`references/patterns/check-a-service-is-suitable.md` — Ask users questions to help them work out if they can or should use your service

**Use when:** If you have complicated eligibility requirements you should follow this pattern. This will save users from having to read through large amounts of documentation outside of your service to work out if they can use it.
Use this pattern to help users work out:
- if they’re eligible to use your service
- how much it will cost them to use
- how much money they will get
- how long it will take to get something
Read guidance about designing your service so you [give users information at the point they need it](https://www.gov.uk/service-manual/design/govuk-content-transactions) in the GOV.UK Service Manual.

**Do not use when:** Do not use this pattern if you can reasonably include information users need to know about your service and its eligibility requirements on a start page.

### Check answers

`references/patterns/check-answers.md` — Let users check their answers before submitting information to a service

**Use when:** Show a single check answers page immediately before the confirmation screen for small to medium-sized transactions.
When designing a very large transaction with multiple sections, it may help to include a check answers pages at the end of each section.
This can be valuable for services where different users might be completing each section. You should test this approach with your users to find out if it’s helpful.
Use the [Summary card component](https://design-system.service.gov.uk/components/summary-list/#summary-cards) when users need to check multiple things of the same type. For example to review a series of interview appointments or application choices.

### Complete multiple tasks

`references/patterns/complete-multiple-tasks.md` — Task lists help users understand tasks involved in completing a transaction, the order they should complete tasks in and when they have completed tasks

**Use when:** Only use a complete multiple tasks page for longer transactions involving multiple tasks that users may need to complete over a number of sessions.
Try to simplify the transaction before you use a complete multiple tasks page. If you’re able to reduce the number of tasks or steps involved, you might not need one.

### Confirm a phone number

`references/patterns/confirm-a-phone-number.md` — Identifying users when they sign in

**Use when:** Ask the user to enter a security code when they need to sign in or complete a higher-risk task, such as changing a password.
Asking the user to enter a security code sent to their mobile phone gives a second layer of security over only [asking for a password](https://design-system.service.gov.uk/patterns/passwords/).
You can ask for a security code every time a user signs in or only once per device, depending on the risk level of your service.

### Confirm an email address

`references/patterns/confirm-an-email-address.md` — Use an email confirmation loop to check that a user has access to a specific email

**Use when:** Only use email confirmation loops if:
- critical functionality in the service is only available via email, for example, a password reset
- accidentally using the wrong email address would give someone else access to sensitive information about the user
Remember that confirmed emails do not prove a person’s identity, just that they have access to that email address at the time they confirmed.

### Confirmation pages

`references/patterns/confirmation-pages.md` — Let users know they’ve completed a transaction

**Use when:** You should use a confirmation page at the end of a transaction.

### Contact a department or service team

`references/patterns/contact-a-department-or-service-team.md` — Contact a department or service team

**Use when:** Use this pattern whenever you need to help users contact your team or department. Carry out contextual user research to decide exactly where to use this pattern in a page or service.
Read about how and why to [set up user support](https://www.gov.uk/service-manual/helping-people-to-use-your-service/set-up-and-manage-user-support) in the GOV.UK Service Manual.

### Cookies page

`references/patterns/cookies-page.md` — Tell users about the cookies you’re setting on their device and let them accept or reject different types of non-essential cookies.

**Use when:** Use a cookies page to tell the user about any cookies your service uses - or any other technologies that work in a similar way and store information on the user’s device. For example, HTML5 local storage or service workers.

### Create a username

`references/patterns/create-a-username.md` — Help users to create a unique and memorable username to sign into a service with

**Use when:** Before using this pattern, you should consider whether you really need users to [create accounts in your service](https://design-system.service.gov.uk/patterns/create-accounts/) in the first place.

### Create accounts

`references/patterns/create-accounts.md` — Help users create an account for your service

**Use when:** Provide user accounts if your users will need to regularly access or update their data in your service.

**Do not use when:** Do not create user accounts if you can provide a usable service without them.
This is because user accounts are:
- a barrier for many users and make it more likely they will drop out
- difficult to build and maintain
If you want to let users check the status of a one-off transaction, give them a unique reference number they can use along with their name or email address.
Unique references are hard to remember so you should send them in an email or text message to the user.

### Dates

`references/patterns/dates.md` — Help users enter or select a date

**Use when:** Follow this pattern whenever you need users to provide or select a date as part of your&nbsp;service.

### Email addresses

`references/patterns/email-addresses.md` — Help users enter a valid email address

**Use when:** Follow this pattern whenever you need to capture an email address.

### Equality information

`references/patterns/equality-information.md` — This pattern explains how to ask users for equality information

**Use when:** These patterns are based on the [harmonised standards developed by the Government Statistical Service](https://analysisfunction.civilservice.gov.uk/government-statistical-service-and-statistician-group/gss-support/gss-harmonisation-support/harmonised-standards-and-guidance/).
Collecting equality information in a consistent way across the public sector makes the data more useful. For example, an organisation can benchmark its own services against other public sector services or the population in general. And it can adjust its approach if it finds a particular group is under-represented.
Do not use this pattern to collect information for operational reasons - especially if you’re legally required to ask for the information in a particular way.

### Ethnic groups

`references/patterns/ethnic-group.md`

### Exit a page quickly

`references/patterns/exit-a-page-quickly.md` — Give users a way to quickly and safely exit a service, website or application.

**Use when:** Use this pattern to help the user protect their privacy when your service contains sensitive information that could:
- put someone at risk of abuse or retaliation
- reveal someone’s plans to avoid or escape from harm
For example, a potential victim using a service to help them leave domestic abuse.
Other situations and topics where sensitive information could put users at risk might include:
- rape or sexual assault
- child abuse and neglect
- any other type of abuse
- stalking and harassment
- reporting crime or fraud (whistleblowing)

**Do not use when:** You should not use this pattern for standalone content pages, such as dashboards and guidance. In these cases, use the Exit this page component on its own.

### Gender or sex

`references/patterns/gender-or-sex.md`

### Interruption pages

`references/patterns/interruption-pages.md` — Pause the user journey to give them important information

**Use when:** Think carefully before you choose to use an Interruption page, as doing this might get in the way of the user completing their task.
Use Interruption pages to warn the user before they:
- do something unusual that’s probably a mistake
- do something that cannot be undone (so you can ask the user “Are you sure?”)
- give an answer that conflicts with existing information
You can also use Interruption pages:
- instead of Confirmation pages to show more varied journey outcomes (that are different to a straightforward success, rejection or completion)
- to show the user important information ahead of a task

**Do not use when:** Do not use Interruption pages unless you're confident that both:
- there’s evidence of a clear need to pause the user journey
- it's the only way to give the user information and that they’d otherwise miss it
Read guidance in the Service Manual, particularly to [Map and understand a user's whole problem](https://www.gov.uk/service-manual/design/map-a-users-whole-problem), to find ways to improve the user journey and the organisational processes behind them.

### Names

`references/patterns/names.md` — Help users correctly enter their name

**Use when:** You should follow this pattern whenever you need to ask for a user’s name as part of your service.
Only ask for people’s names if you need that information to deliver a service.

### National Insurance numbers

`references/patterns/national-insurance-numbers.md` — Ask users to provide their National Insurance number

**Use when:** Follow this pattern whenever you need to ask for a National Insurance number.

**Do not use when:** Never use National Insurance numbers to verify a user’s identity.
If you currently use National Insurance numbers to verify identity, find out how to [protect your service against fraud](https://www.gov.uk/service-manual/technology/protecting-your-service-against-fraud).

### Navigate a service

`references/patterns/navigate-a-service.md` — Help users know they’re using your service and navigate around it

**Use when:** Navigation links usually appear in services that:
- are used repeatedly by some users
- involve multiple tasks
- do not have a clear order of tasks or end-to-end journey
Simplify the user journey as much as possible first. This might remove the need for users to navigate around your service.

**Do not use when:** If your service does have a clear end-to-end journey, avoid using navigation links.
Use a [Task list component](https://design-system.service.gov.uk/components/task-list/) instead, as they’re better for helping users understand:
- the tasks involved in completing a transaction
- the order they should complete tasks in
- when they’ve completed tasks
See how to do this in the [Help users to complete multiple tasks pattern](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/).

### Page not found pages

`references/patterns/page-not-found-pages.md` — A page not found tells someone we cannot find the page they were trying to view. They are also known as 404 pages.

**Use when:** Use a page not found if someone is trying to view a page that does not exist. This happens if someone:
- selects a link or button that takes them to a page that does not exist
- types or copies a web address for a page that does not exist
- types or copies a web address incorrectly
Test all links and buttons to make sure they work. Remember to [do the hard work to make it simple](https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple).
Make sure any web addresses in your service, letters, forms and on GOV.UK are for pages that exist or redirect to pages that exist.

### Passwords

`references/patterns/passwords.md` — Help users to create and enter secure and memorable passwords

**Use when:** You should follow this pattern whenever you need users to create or enter a password. Before using this pattern, you should also read the guidance on the [User accounts pattern](https://design-system.service.gov.uk/patterns/create-accounts/).
For technical considerations, you may also want to read the guidance for the [Password input component](https://design-system.service.gov.uk/components/password-input/).

### Payment card details

`references/patterns/payment-card-details.md` — How to ask users for their payment card details

**Use when:** Before using this pattern, check if [GOV.UK Pay](https://www.payments.service.gov.uk/) is suitable for your service.
If you cannot use GOV.UK Pay and need to build your own payment service, follow this pattern to collect payment card details from your users.

### Phone numbers

`references/patterns/phone-numbers.md` — Help users enter a valid phone number

**Use when:** Only collect phone numbers from people if you genuinely need them. Not everyone has or can use a phone, so make sure you give users a choice about how they can be contacted.

### There is a problem with the service pages

`references/patterns/problem-with-the-service-pages.md` — This is a page that tells someone there is something wrong with the service. They are also known as 500 pages

**Use when:** Use this page when there is an unexpected problem with the service. Use the same page for all unexpected problems.
Log all errors and fix them as quickly as possible.
Only display the page for a short time. If a problem cannot be fixed quickly, close the service and [use a Service unavailable page](https://design-system.service.gov.uk/patterns/service-unavailable-pages/).

### Question pages

`references/patterns/question-pages.md` — Follow this pattern whenever you need to ask users questions within your service

**Use when:** Follow this pattern whenever you need to ask users questions within your service.
You should make sure you know why you’re asking every question and only ask users for information you really need.
To help you work out what to ask, you can carry out a [question protocol](https://www.uxmatters.com/mt/archives/2010/06/the-question-protocol-how-to-make-sure-every-form-field-is-necessary.php).
If you ask for optional information:
- in most contexts, add ‘(optional)’ to the labels of optional fields
- for [Radios components](https://design-system.service.gov.uk/components/radios/) and [Checkboxes components](https://design-system.service.gov.uk/components/checkboxes/), add ‘(optional)’ to the legend
Never mark mandatory fields with asterisks.
On every question page you should:
- make sure it’s clear to users why you’re asking each question
- allow users to answer ‘I do not know’ or ‘I’m not sure’ if they are valid responses
Read more about [designing good questions](https://www.gov.uk/service-manual/design/designing-good-questions) in the GOV.UK Service Manual.

### Service unavailable pages

`references/patterns/service-unavailable-pages.md` — This is a page that tells someone a service is unavailable. It should say when the service will be available or what to do if it is permanently closed

**Use when:** Use a service unavailable page when a service has been closed on purpose. This could be for a specific period of time or permanently.
If there is a problem with the service, [use a There is a problem with the service page](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/).
Have a general page in case you need to close a service and do not have time to update the page. As soon as you know when the service will be available, update the page.

### Start pages

`references/patterns/start-pages.md`

### Start using a service

`references/patterns/start-using-a-service.md` — Create a starting point for your digital service on GOV.UK

**Use when:** Use this pattern to help you prototype a start point for your service, so you can test as much of the user journey as possible.
Public-facing UK government services need to start on a GOV.UK content page. The GDS content team creates these start points using GOV.UK publishing apps, separate from GOV.UK Frontend.
Service teams will need to agree content for this GOV.UK content page with the GDS content team. Read [guidance on how to get your service on GOV.UK](https://www.gov.uk/service-manual/service-assessments/get-your-service-on-govuk).

### Step by step navigation

`references/patterns/step-by-step-navigation.md` — A starting point for your digital service on GOV.UK

**Use when:** GOV.UK uses step by step navigation to represent end to end journeys:
- that have a specific start and end point
- that require the user to interact with several pieces of guidance or transactions on GOV.UK
- where it’s helpful for the user to complete tasks in a specific order

**Do not use when:** Do not use the step by step pattern:
- when most of the guidance or services that make up the journey are not on GOV.UK
- when the user only needs to read guidance and not take an action
- when there’s no logical or helpful order to complete the tasks - for example, when you’re mostly presenting the user with a series of options
- inside a transactional service – use the [Complete multiple tasks pattern](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) instead

### Task list pages

`references/patterns/task-list-pages.md`

### Understand the impact of an emergency on your service

`references/patterns/understand-the-impact-of-an-emergency.md`

### Recover from validation errors

`references/patterns/validation.md` — Check the answers users give to make sure they’re valid - and if there’s an error, tell them what's wrong and how to fix it

**Use when:** Use validation to identify when the user tried to provide information that you're not able to use. Then show the user an error message that helps them to fix the problem.
But minimise your chances of needing to show an error message in the first place by:
- [making sure your questions are well designed](https://www.gov.uk/service-manual/design/designing-good-questions)
- accepting information in different formats, as long as it’s not ambiguous (for example, accept postcodes with or without spaces - and names that include a non-alphabetical character or an apostrophe, accent or other diacritic)

**Do not use when:** Do not use validation to check whether the user is eligible to use the service or has permission to do something. Instead, take them to a page which tells them they’re not eligible and gives them useful information about what to do next.
There are separate patterns for:
- [‘There is a problem with the service’ pages](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/)
- [‘Page not found’ pages](https://design-system.service.gov.uk/patterns/page-not-found-pages/)
- [‘Service unavailable’ pages](https://design-system.service.gov.uk/patterns/service-unavailable-pages/)
