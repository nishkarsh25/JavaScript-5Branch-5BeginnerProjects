# Guessing Game

Welcome to the Guessing Game! This is a simple yet engaging web-based game where players attempt to guess a randomly generated number between 1 and 100. The game is implemented using HTML, CSS (with Tailwind CSS for styling), and JavaScript. Below, you'll find a comprehensive guide on how to play the game and a detailed overview of its features.

## How to Play

Playing the Guessing Game is straightforward. Here's a step-by-step guide:

1. **Accessing the Game**: Open the `index.html` file in your preferred web browser to start playing.

2. **Guessing a Number**: Enter your numerical guess into the input field provided. Your guess should be between 1 and 100.

3. **Submitting Your Guess**:
   - Click the "Guess" button to submit your guess.
   - Alternatively, you can press the Enter key after typing your guess into the input field.

4. **Receiving Feedback**:
   - If your guess is outside the valid range (1 to 100) or if it's not a numeric value, an error message will be displayed prompting you to enter a valid guess.
   - If your guess is higher than the correct number, you'll receive a message indicating that your guess is too high.
   - If your guess is lower than the correct number, you'll receive a message indicating that your guess is too low.
   - If your guess matches the correct number, you'll receive a congratulatory message along with the number of guesses you took to reach the correct answer.

5. **Restarting the Game**:
   - After successfully guessing the correct number, you have the option to reset the game and start a new round. You can either wait for 5 seconds for the game to reset automatically or manually refresh the page to begin a new game.

## Features

### Responsive Design
- The game interface is designed to be responsive, ensuring optimal viewing and interaction across various devices and screen sizes. Whether you're playing on a desktop, tablet, or smartphone, the game adapts to provide an enjoyable experience.

### Error Handling
- Robust error handling ensures that players receive clear feedback when their input is invalid. If a player enters a number outside the valid range (1 to 100) or a non-numeric value, the game immediately notifies them, prompting them to correct their input.

### Number of Guesses Tracker
- The game keeps track of the number of guesses made by the player throughout each round. The current guess count is displayed on the screen, allowing players to monitor their progress and challenge themselves to guess the correct number in as few attempts as possible.

### Reset Functionality
- After successfully guessing the correct number, players can reset the game to its initial state with ease. The reset functionality clears the input field, resets the guess count to zero, generates a new random number for the player to guess, and enables them to embark on a new round of gameplay.

## Live Demo

You can try out the live demo of the app [here](https://javascript-5branch-5beginnerprojects-4.onrender.com).

## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/JavaScript-5Branch-5BeginnerProjects/blob/GuessingGameProject/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 


# GIF's
<img src="https://github.com/nishkarsh25/JavaScript-5Branch-5BeginnerProjects/blob/GuessingGameProject/Screenshots/ss2.gif" alt="Screenshot 4" width="1000">


## Technologies Used

- **HTML**: The game's structure and content are defined using HTML, providing the foundation for the user interface and interaction.
- **CSS (with Tailwind CSS)**: Styling and layout are applied to the game elements using CSS, with the Tailwind CSS framework utilized to streamline the styling process and ensure a modern and visually appealing design.
- **JavaScript**: The game's logic and functionality are implemented using JavaScript, enabling dynamic behavior such as generating random numbers, validating user input, providing feedback to players, and managing game state.




## How to Contribute

Contributions to the Guessing Game project are highly appreciated! Whether you have ideas for new features, improvements to existing functionality, or bug fixes, your contributions can help enhance the game and make it even more enjoyable for players. Here's how you can contribute:

1. **Fork the Repository**: Start by forking the [Guessing Game repository](https://github.com/nishkarsh25/JavaScript-5Branch-5BeginnerProjects.git) to create your own copy of the project. Forking creates a copy of the repository under your GitHub account, allowing you to freely experiment with changes without affecting the original project.

2. **Clone Your Fork**: Once you've forked the repository, clone your forked copy to your local machine using Git. Navigate to the directory where you want to store the project and run the following command, replacing `your-username` with your GitHub username:

    ```bash
    https://github.com/nishkarsh25/JavaScript-5Branch-5BeginnerProjects.git
    git checkout GuessingGameProject
    ```

3. **Create a New Branch**: Before making any changes, create a new branch in your local repository to work on your contribution. Branches help keep your changes isolated and make it easier to manage multiple contributions. Use a descriptive name for your branch that reflects the nature of your changes:

    ```bash
    git checkout -b feature/new-feature
    ```

4. **Make Changes**: Implement your desired changes in the project. This could involve adding new features, improving existing functionality, fixing bugs, updating documentation, or addressing any open issues in the repository.

5. **Test Your Changes**: Before submitting your contribution, thoroughly test your changes to ensure they work as expected and do not introduce any regressions or issues. Run the game locally and try out your modifications to verify their correctness and usability.

6. **Commit Your Changes**: Once you're satisfied with your changes, commit them to your local repository with descriptive commit messages that clearly explain the purpose of each change:

    ```bash
    git add .
    git commit -m "Add new feature: Description of the feature"
    ```

7. **Push Your Changes**: After committing your changes locally, push them to your forked repository on GitHub to make them available for review and inclusion in the main project. Push your branch to GitHub using the following command:

    ```bash
    git push origin feature/new-feature
    ```

8. **Submit a Pull Request (PR)**: Once your changes are pushed to your forked repository, navigate to the GitHub page for your fork. You should see an option to create a new pull request. Click on it to open a new pull request against the original repository's `main` branch. Provide a clear and concise description of your changes in the pull request, along with any relevant information or context for reviewers.

9. **Collaborate and Iterate**: Collaborate with other contributors and maintainers to review and refine your changes. Respond to feedback, address any requested changes, and iterate on your contribution as needed until it's ready to be merged into the main project.

10. **Celebrate Your Contribution**: Congratulations on making a contribution to the Guessing Game project! Your efforts help improve the game for everyone who plays it. Thank you for your contribution and for being part of the open-source community!



## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

Guessing Game is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like Guessing Game and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **Tailwind CSS**: Tailwind CSS empowers developers to build custom designs rapidly, enabling the creation of a visually appealing and cohesive user interface. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com
