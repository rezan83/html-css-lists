# Listmania
[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#results)

#### Work from the `index.html` file provided in this repository.

### Part 1 - Ordered Lists

- Create an `h2` element with the contents **Driving Instructions**
- Underneath, wrap the instructions in the included `.txt` file in an ordered list
- Wrap each individual instruction in an `li` tag

### Part 2 - Unordered Lists

- In an unordered list, create a **shopping list** with at least five items
- Change the `list-style-type` to **circle**
- Make two of the items links that take the user to an image of the chosen item
- The links should open in a new tab

### Part 3 - Easy Carrot Cake

- The top of the section should have an `h1` tag with the title **Easy Carrot Cake**
- Next should come an `h2` tag with the title **Ingredients**. The ingredients in the `.txt` file should should come after in an unordered list
- Another `h2` should come after with the title **Steps**
- Underneath steps, include the steps from the `.txt` file in an ordered list
- Change the `list-style-type` to whatever you like

### Additional

- Use comments in your markup to specify the specific lists
- Use a **class** or **id** as needed

[//]: # (autograding info start)
## Results


### Part 1: Ordered Lists

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Should be an H2 element with inner text of 'Driving Instructions' |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | OL with 5 list items |

### Part 2: Unordered List

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | UL with 5 list items |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Style should be set to 'list-style-type: cirle;'  |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | Anchor tags should have target set to '_blank'  |

### Part 3

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | Top section should contain an H1 tag with the title Easy Carrot Cake |
| ![Status](../../blob/badges/.github/badges/autograding/status6.svg) | First H2's in Part 3 Should contain text of 'Ingredients', and second H2 should be 'Steps'   |
| ![Status](../../blob/badges/.github/badges/autograding/status7.svg) | UL with an id of 'ingredients' Should have 12 list items |



[Results Details](https://github.com/DigitalCareerInstitute/UIB-content-listmania/actions)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/UIB-content-listmania/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)