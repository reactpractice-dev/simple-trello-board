import { render, screen } from "@testing-library/react";
import AddCardButton from "../AddCardButton";
import userEvent from "@testing-library/user-event";

describe("Add card button", () => {
  it("initially shows a button to add a card", () => {
    render(<AddCardButton />);
    expect(
      screen.getByRole("button", { name: /Add a card/i })
    ).toBeInTheDocument();
  });

  it("switches to a form to enter the title after the user clicks add card", async () => {
    render(<AddCardButton />);
    await userEvent.click(screen.getByText(/Add a card/i));

    expect(
      screen.getByPlaceholderText(/Enter a title for this card/i)
    ).toHaveFocus();
    expect(
      screen.getByRole("button", { name: /Add card/i })
    ).toBeInTheDocument();
  });

  it("saves the card when the user presses Add card", async () => {
    const mockSave = jest.fn();
    render(<AddCardButton onAddCard={mockSave} />);
    await userEvent.click(screen.getByText(/Add a card/i));
    await userEvent.type(
      screen.getByPlaceholderText(/Enter a title for this card/),
      "Hello trello"
    );
    await userEvent.click(screen.getByText(/Add card/i));
    expect(mockSave).toHaveBeenCalledWith("Hello trello");
  });

  it("saves the card when the user hits Enter", async () => {
    const mockSave = jest.fn();
    render(<AddCardButton onAddCard={mockSave} />);
    await userEvent.click(screen.getByText(/Add a card/i));
    await userEvent.type(
      screen.getByPlaceholderText(/Enter a title for this card/),
      "Hello trello{enter}"
    );

    expect(mockSave).toHaveBeenCalledWith("Hello trello");
  });

  it("automatically switches back to adding another card after the previous one is saved", async () => {
    const mockSave = jest.fn();
    render(<AddCardButton onAddCard={mockSave} />);
    await userEvent.click(screen.getByText(/Add a card/i));
    await userEvent.type(
      screen.getByPlaceholderText(/Enter a title for this card/),
      "Hello trello"
    );
    await userEvent.click(screen.getByText(/Add card/i));
    expect(mockSave).toHaveBeenCalledWith("Hello trello");

    // check the form is still shown
    expect(
      screen.getByPlaceholderText(/Enter a title for this card/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Add card/i)).toBeInTheDocument();

    // check that clicking outside hides it
    await userEvent.click(document.body);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
