import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import NewMessageForm from "../components/NewMessageForm";

describe("<NewMessageForm />", () => {
  let getByTestId;

  afterEach(cleanup);

  describe("clicking the send button", () => {
    let sendHandler;

    beforeEach(async () => {
      sendHandler = jest.fn().mockName("sendHandler");
        ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));
        
      fireEvent.change(getByTestId("messageText"), {
        target: {
          value: "New Message",
        },
      });
      fireEvent.click(getByTestId("sendButton"));
    });

    it("clears the text field", () => {
      expect(getByTestId("messageText").value).toEqual("");
    });
    it("calls the send handler", () => {
      expect(sendHandler).toHaveBeenCalledWith("New Message");
    });
  });
});
