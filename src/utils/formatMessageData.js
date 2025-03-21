export  const formatData = (apiData, user) => {
    return apiData.reduce((acc, message) => {
      const createdAt = message.createdAt || new Date().toISOString();
      const date = createdAt.split('T')[0];

      if (!acc[date]) {
        acc[date] = { date, messages: [], read: true };
      }

      acc[date].messages.push({
        timestamp: message.createdAt,
        id: message._id,
        sender:
          message.sender.name === user?.userName ? 'You' : message.sender.name,
        content:
          message.attachments?.length > 0
            ? message?.attachments
            : message.content,
        contentType: message.attachments?.length > 0 ? 'image' : 'text',
        chatId: message.chat,
      });

      return acc;
    }, {});
  };