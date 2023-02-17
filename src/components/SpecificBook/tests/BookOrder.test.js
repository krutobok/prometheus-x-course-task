import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import BookOrder from '../BookOrder'
import styles from '../BookOrder.module.css'

const book = {
  id: 80,
  author: 'James Padolsey',
  price: 1,
  image: '',
  title: 'Clean Code in JavaScript',
  shortDescription:
    "Building robust apps starts with creating clean code. In this book, you'll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code. You'll write functional, intuitive, and maintainable code while also understanding how your code affects the end user and the wider community.",
  description:
    "Building robust apps starts with creating clean code. In this book, you'll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code. You'll write functional, intuitive, and maintainable code while also understanding how your code affects the end user and the wider community. The book starts with popular clean-coding principles such as SOLID, and the Law of Demeter (LoD), along with highlighting the enemies of writing clean code such as cargo culting and over-management. You'll then delve into JavaScript, understanding the more complex aspects of the language. Next, you'll create meaningful abstractions using design patterns, such as the Class Pattern and the Revealing Module Pattern. You'll explore real-world challenges such as DOM reconciliation, state management, dependency management, and security, both within browser and server environments. Later, you'll cover tooling and testing methodologies and the importance of documenting code. Finally, the book will focus on advocacy and good communication for improving code cleanliness within teams or workplaces, along with covering a case study for clean coding. By the end of this book, you'll be well-versed with JavaScript and have learned how to create clean abstractions, test them, and communicate about them via documentation.",
}

describe('ProductCard component', () => {
  it('should change the total cost when changing quantity', () => {
    const { getByTestId, rerender } = render(<BookOrder book={book} />)
    fireEvent.input(getByTestId(styles['count']), {
      target: { value: 2 },
    })
    expect(getByTestId(styles['price']).textContent).toEqual('2.00')
  })
})
