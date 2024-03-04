import React from "react"
import { render, screen } from "@testing-library/react-native"
import { Button } from "../Button"

describe("Hello", () => {
  it("renders the correct message", () => {
    const mockOnPress = jest.fn()
    render(
      <Button
        testID="next-screen-button"
        preset="reversed"
        text="Hello, world!"
        onPress={mockOnPress}
      />,
    )
    expect(screen.getByText("Hello, world!")).toBeTruthy()
  })
})
