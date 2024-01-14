import numpy as np
import gym

# Create Taxi environment
env = gym.make('Taxi-v3')

# Q-learning parameters
num_states = env.observation_space.n
num_actions = env.action_space.n
Q = np.zeros((num_states, num_actions))  # Q-table
alpha = 0.3  # learning rate (adjusted)
gamma = 0.9  # discount factor
epsilon = 0.2  # exploration-exploitation trade-off (adjusted)
num_episodes = 2000  # increased the number of episodes

# Q-learning algorithm
for episode in range(num_episodes):
    state = env.reset()
    done = False
    total_reward = 0

    while not done:
        if np.random.rand() < epsilon:
            action = env.action_space.sample()  # explore
        else:
            action = np.argmax(Q[state, :])  

        next_state, reward, done, _ = env.step(action)

        Q[state, action] = (1 - alpha) * Q[state, action] + alpha * (reward + gamma * np.max(Q[next_state, :]))

        state = next_state
        total_reward += reward

    if episode % 100 == 0:
        print(f"Episode: {episode}, Total Reward: {total_reward}")

# Evaluate the learned policy
num_evaluations = 100
total_reward = 0

for _ in range(num_evaluations):
    state = env.reset()
    done = False

    while not done:
        action = np.argmax(Q[state, :])

        next_state, reward, done, _ = env.step(action)

        total_reward += reward
        state = next_state

average_reward = total_reward / num_evaluations
print(f"Average reward over {num_evaluations} evaluations: {average_reward}")
