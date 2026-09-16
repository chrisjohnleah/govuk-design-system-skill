# Task list

The task list component displays all the tasks a user needs to do, and allows users to easily identify which ones are done and which they still need to do.

The task list component displays all the tasks a user needs to do, and allows users to easily identify which ones are done and which they still need to do.

**Example: Task list**

Nunjucks:

```njk
{% from "govuk/components/task-list/macro.njk" import govukTaskList %}

{{ govukTaskList({
  idPrefix: "company-details",
  items: [
    {
      title: {
        text: "Company Directors"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    },
    {
      title: {
        text: "Registered company details"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Financial history"
      },
      hint: {
        text: "Include 5 years of the company’s relevant financial information"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Business plan"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "References"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    }
  ]
}) }}
```

HTML:

```html
<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-3-hint company-details-3-status">
        Financial history
      </a>
      <div id="company-details-3-hint" class="govuk-task-list__hint">
        Include 5 years of the company’s relevant financial information
      </div>
    </div>
    <div class="govuk-task-list__status" id="company-details-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-4-status">
        Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-4-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-5-status">
        References
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-5-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
</ul>
```

## When to use this component

Use the task list to give users more control over how they complete long, complex services.

Only use the task list if there’s evidence that users:

- do not want to, or cannot, complete all the tasks in one sitting
- need to be able to choose the order they complete the tasks in

## When not to use this component

Try to simplify the service before you use a task list. If you’re able to reduce the number of tasks or steps involved, you might not need one.

Do not use the task list for a long service that needs to be completed in a specific order. If it needs to be completed over multiple sessions, consider allowing users to save their progress, and then to continue where they left off when they return. Use the start page to explain what users will be expected to do during the service.

The task list should not be used as a way of showing users their answers. For this, you should use a [Summary list component](https://design-system.service.gov.uk/components/summary-list/) instead.

## How it works

There are 2 ways to use the task list component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/), you can use the Nunjucks macro.

**Example: Task list** second

Nunjucks:

```njk
{% from "govuk/components/task-list/macro.njk" import govukTaskList %}

{{ govukTaskList({
  idPrefix: "company-details",
  items: [
    {
      title: {
        text: "Company Directors"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    },
    {
      title: {
        text: "Registered company details"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Financial history"
      },
      hint: {
        text: "Include 5 years of the company’s relevant financial information"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Business plan"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "References"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    }
  ]
}) }}
```

HTML:

```html
<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-3-hint company-details-3-status">
        Financial history
      </a>
      <div id="company-details-3-hint" class="govuk-task-list__hint">
        Include 5 years of the company’s relevant financial information
      </div>
    </div>
    <div class="govuk-task-list__status" id="company-details-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-4-status">
        Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-4-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-5-status">
        References
      </a>
    </div>
    <div class="govuk-task-list__status" id="company-details-5-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
</ul>
```

Users should be able to complete tasks in whatever order they like.

The status alongside the task indicates whether they can start it. Users can select a task to start completing it. Once they have completed it and returned to the task list, the status for that task will have changed to ‘Completed’.

Users can only move on from the task list when all tasks are shown as ‘Completed’.

Read the [Complete multiple tasks pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) for more information on how to use the task list within a service.

### Tasks

Tasks are usually actions that the user needs to take to complete a service. In a task list, the user should be able to choose to complete tasks in any order that works for them.

Each task within a task list includes a task name and a status. It can also include hint text if you decide this is needed.

The whole row is linked, allowing users to select anywhere within it to start the task.

#### Write clear task descriptions

The task name gives users a reasonable expectation of what that task is about. For example, ‘Your contact details’ or ‘Upload evidence’. Use sentence case, and keep it short. Users of screen readers might find it difficult to navigate the task list if the task names are too long.

If you’re finding it difficult to come up with a clear and concise task name, it might be because the task itself is too complex and may need to be separated into smaller tasks. Group questions and actions into tasks in a way that makes sense to users, based on their needs.

#### Adding hint text

Only use hint text if there is evidence that the user needs more information about what the task will include.

Keep hint text to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with the task link. This could frustrate users if the text is long.

Do not include links within the hint text. The whole task row links users to the task itself, so any links within the hint text will not work.

#### Grouping tasks

If there are a lot of tasks to complete, you might find that grouping them makes it easier for users to understand and plan what they need to do. Tasks can be grouped into separate task lists on a page. Give each task list a short heading that clearly explains the grouping.

Read the [Complete multiple tasks pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) for more information on grouping tasks.

### Statuses

Statuses use colour and a short descriptor to give users a quick overview of how much of the task list they have completed, and how much is left to do.

Read the [Complete multiple tasks pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) for more information on status colours and text.

## Research on this component

This component was created by a cross-government group using research from the previous task list pattern.

### Linking the whole task row to the task

User feedback from the task list pattern has shown that some users currently try to select task statuses, thinking they are buttons or links. The statuses have been redesigned to look less like buttons, and now the whole task row is linked so that users can select anywhere within it to enter and begin the task.

### Formatting of statuses

The use of uppercase in task statuses makes them harder to read. User research has also shown that once a few tasks have been completed, it is harder for users to scan the page and spot incomplete tasks.

Statuses are now written in sentence case to make them easier to read. The ‘Completed’ task now uses black text with no background colour, which will draw more attention to tasks that require action.

We have also introduced a new colour palette for statuses, using colour contrasts that meet accessibility guidance.

### Known issues and gaps

While this new component is based on user research from the task list pattern, we still need to carry out user testing with this new component. In particular, we would like to test the following assumptions:

- the benefits of linking the whole task row outweigh the risks of accidental clicking
- the contrast of the statuses is sufficient
- the suggested wording of the statuses make the most sense to users

If you are using this component in a service, we would like to hear about any user research so that we can identify any potential issues.

## Nunjucks macro options

Import: `{% from "govuk/components/task-list/macro.njk" import govukTaskList %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `items` | array | yes | The items for each task within the task list component. |
| `items.title` | object | yes | The main title for the task within the task list component. |
| `items.title.text` | string | yes | Text to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items.title.html` | string | yes | HTML to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items.title.classes` | string | no | Classes to add to the title wrapper. |
| `items.hint` | object | no | Can be used to add a hint to each task within the task list component. |
| `items.hint.text` | string | yes | Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items.hint.html` | string | yes | HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items.status` | object | yes | The status for each task within the task list component. |
| `items.status.tag` | object (component options) | no | Can be used to add a tag to the status of the task within the task list component. |
| `items.status.text` | string | no | Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items.status.html` | string | no | HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items.status.classes` | string | no | Classes to add to the status container. |
| `items.href` | string | no | The value of the link’s `href` attribute for the task list item. |
| `items.classes` | string | no | Classes to add to the item `div`. |
| `classes` | string | no | Classes to add to the `ul` container for the task list. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the `ul` container for the task list. |
| `idPrefix` | string | no | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `-`. Defaults to `"task-list"`. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "items": [
    {
      "title": {
        "text": "Company Directors"
      },
      "href": "#",
      "status": {
        "text": "Completed"
      }
    },
    {
      "title": {
        "text": "Registered company details"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Incomplete",
          "classes": "govuk-tag--blue"
        }
      }
    },
    {
      "title": {
        "text": "Business plan"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Incomplete",
          "classes": "govuk-tag--blue"
        }
      }
    }
  ]
}
```

```html
<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
</ul>
```

### with hint text and additional states

```json
{
  "items": [
    {
      "title": {
        "text": "Company Directors"
      },
      "href": "#",
      "status": {
        "text": "Completed"
      }
    },
    {
      "title": {
        "text": "Registered company details"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Not started",
          "classes": "govuk-tag--teal"
        }
      }
    },
    {
      "title": {
        "text": "Business plan"
      },
      "href": "#",
      "hint": {
        "text": "Ensure the plan covers objectives, strategies, sales, marketing and financial forecasts."
      },
      "status": {
        "tag": {
          "text": "Review",
          "classes": "govuk-tag--magenta"
        }
      }
    },
    {
      "title": {
        "text": "Documentation"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "In progress",
          "classes": "govuk-tag--blue"
        }
      }
    },
    {
      "title": {
        "text": "Charitable status"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Error",
          "classes": "govuk-tag--red"
        }
      }
    },
    {
      "title": {
        "text": "Payment"
      },
      "hint": {
        "text": "It will cost between £15 and £75"
      },
      "status": {
        "text": "Cannot start yet",
        "classes": "govuk-task-list__status--cannot-start-yet"
      }
    }
  ]
}
```

```html
<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--teal">
        Not started
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-hint task-list-3-status">
        Business plan
      </a>
      <div id="task-list-3-hint" class="govuk-task-list__hint">
        Ensure the plan covers objectives, strategies, sales, marketing and financial forecasts.
      </div>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--magenta">
        Review
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-4-status">
        Documentation
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-4-status">
      <strong class="govuk-tag govuk-tag--blue">
        In progress
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-5-status">
        Charitable status
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-5-status">
      <strong class="govuk-tag govuk-tag--red">
        Error
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item">
    <div class="govuk-task-list__name-and-hint">
      <div>
        Payment
      </div>
      <div id="task-list-6-hint" class="govuk-task-list__hint">
        It will cost between £15 and £75
      </div>
    </div>
    <div class="govuk-task-list__status govuk-task-list__status--cannot-start-yet" id="task-list-6-status">
      Cannot start yet
    </div>
  </li>
</ul>
```

### with all possible colours

```json
{
  "items": [
    {
      "title": {
        "text": "Task A"
      },
      "href": "#",
      "status": {
        "text": "Text colour"
      }
    },
    {
      "title": {
        "text": "Task B"
      },
      "href": "#",
      "status": {
        "text": "Secondary text colour",
        "classes": "govuk-task-list__status--cannot-start-yet"
      }
    },
    {
      "title": {
        "text": "Task C"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Grey",
          "classes": "govuk-tag--grey"
        }
      }
    },
    {
      "title": {
        "text": "Task D"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Blue",
          "classes": "govuk-tag--blue"
        }
      }
    },
    {
      "title": {
        "text": "Task E"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Teal",
          "classes": "govuk-tag--teal"
        }
      }
    },
    {
      "title": {
        "text": "Task F"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Green",
          "classes": "govuk-tag--green"
        }
      }
    },
    {
      "title": {
        "text": "Task G"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Purple",
          "classes": "govuk-tag--purple"
        }
      }
    },
    {
      "title": {
        "text": "Task H"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Magenta",
          "classes": "govuk-tag--magenta"
        }
      }
    },
    {
      "title": {
        "text": "Task I"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Red",
          "classes": "govuk-tag--red"
        }
      }
    },
    {
      "title": {
        "text": "Task J"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Orange",
          "classes": "govuk-tag--orange"
        }
      }
    },
    {
      "title": {
        "text": "Task K"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Yellow",
          "classes": "govuk-tag--yellow"
        }
      }
    }
  ]
}
```

```html
<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Task A
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Text colour
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Task B
      </a>
    </div>
    <div class="govuk-task-list__status govuk-task-list__status--cannot-start-yet" id="task-list-2-status">
      Secondary text colour
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Task C
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--grey">
        Grey
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-4-status">
        Task D
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-4-status">
      <strong class="govuk-tag govuk-tag--blue">
        Blue
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-5-status">
        Task E
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-5-status">
      <strong class="govuk-tag govuk-tag--teal">
        Teal
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-6-status">
        Task F
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-6-status">
      <strong class="govuk-tag govuk-tag--green">
        Green
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-7-status">
        Task G
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-7-status">
      <strong class="govuk-tag govuk-tag--purple">
        Purple
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-8-status">
        Task H
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-8-status">
      <strong class="govuk-tag govuk-tag--magenta">
        Magenta
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-9-status">
        Task I
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-9-status">
      <strong class="govuk-tag govuk-tag--red">
        Red
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-10-status">
        Task J
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-10-status">
      <strong class="govuk-tag govuk-tag--orange">
        Orange
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-11-status">
        Task K
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-11-status">
      <strong class="govuk-tag govuk-tag--yellow">
        Yellow
      </strong>
    </div>
  </li>
</ul>
```

### with very long single word tags

```json
{
  "items": [
    {
      "title": {
        "text": "Company Directors"
      },
      "href": "#",
      "status": {
        "text": "Completed"
      }
    },
    {
      "title": {
        "text": "Registered company details"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Incomplete",
          "classes": "govuk-tag--blue"
        }
      }
    },
    {
      "title": {
        "text": "A very very very long Business plan"
      },
      "href": "#",
      "status": {
        "tag": {
          "text": "Thisisaverylongwaytosaythatsomethingisincomplete",
          "classes": "govuk-tag--blue"
        }
      }
    }
  ]
}
```

```html
<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        A very very very long Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Thisisaverylongwaytosaythatsomethingisincomplete
      </strong>
    </div>
  </li>
</ul>
```

### with empty values

```json
{
  "items": [
    null,
    null,
    {
      "title": {
        "text": "Task A"
      },
      "href": "#",
      "status": {
        "text": "Completed"
      }
    },
    false,
    "",
    {
      "title": {
        "text": "Task B"
      },
      "href": "#",
      "status": {
        "text": "Completed"
      }
    }
  ]
}
```

```html
<ul class="govuk-task-list">


  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Task A
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      Completed
    </div>
  </li>


  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-6-status">
        Task B
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-6-status">
      Completed
    </div>
  </li>
</ul>
```

