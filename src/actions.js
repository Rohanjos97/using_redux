export const CLEAR_TEXT = 'CLEAR_TEXT';
export const ENTER_TEXT = 'ENTER_TEXT';

export function buttonPressed() {
  return {
    type: CLEAR_TEXT
  };
}

export function enterText(text) {
  return {
    type: ENTER_TEXT,
    text
  };
}