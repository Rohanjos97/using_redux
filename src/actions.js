export const CLEAR_TEXT = 'CLEAR_TEXT';
export const ENTER_TEXT = 'ENTER_TEXT';

export function buttonPressedAction() {
  return {
    type: CLEAR_TEXT
  };
}

export function enterTextAction(text) {
  return {
    type: ENTER_TEXT,
    text
  };
}