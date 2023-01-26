import { AppPages } from 'pages/appPages';

export function chatsSetter() {
  const { page } = this.state;

  if (page !== AppPages.Chat) {
    return;
  }
  const { chatsList } = this.page.refs;
  chatsList.createChatsList();
  Object.values(chatsList.children.chats).forEach((chat: any) => {
    this.page.refs[`chat-${chat.chatID}`] = chat;
  });
}
