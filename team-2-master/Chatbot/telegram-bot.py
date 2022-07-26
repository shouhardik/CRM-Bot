import logging

import pandas as pd
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, ConversationHandler

API_KEY = '5490271874:AAG-iW_blLUfthAZBV__4Jz-gVKia9d2bDI'

# Set up the logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logging.info('Starting Bot...')

logger = logging.getLogger(__name__)


file = "/Users/harshmody/team-2/Disability Project Wise Report (46).xlsx"

df = pd.read_excel(file, header=4, index_col=1)
df.drop(df.columns[df.columns.str.contains('unnamed', case=False)], axis=1, inplace=True)
df.drop(['Distribution Date', 'Hearing Aids', 'Hands', 'Ratnanidhi Leg', 'Wheelchair'], axis=1, inplace=True)


def start(update, context):
    update.message.reply_text('Hello and Welcome to Ratna Nidhi\'s Chatbot! '
                              '\n\n Please Verify Contact to Proceed Further: ')


c_index = []


def verify_user(update, context):
    contact = update.message.text
    contact_list = df['Mobile No.'].tolist()
    r_index = contact_list.index(float(contact))
    count = 0
    if float(contact) in contact_list:
        update.message.reply_text("User Verified !!")
        user_df = df.loc[df['Mobile No.'] == float(contact)]
        for item in user_df:
            if user_df[item].isnull().values.any():
                c_index.append([count, item])
            count += 1
        for j in range(len(c_index)):
            update.message.reply_text("Enter Missing Values For" + str(c_index[j][1]))
            missing_value = update.message.text
            print(df.iloc[r_index, c_index[j][0]])
            print(missing_value)
            df.iloc[r_index, c_index[j][0]] = str(missing_value)
            print(df.iloc[r_index, c_index[j][0]])

    else:
        update.message.reply_text("Contact Verification Unsuccessful!! Please contact admin team as your mobile does "
                                  "not exist in our database!!")


def error(update, context):
    logger.warning('Update "%s" caused error "%s"', update, context.error)


def main():
    updater = Updater(API_KEY, use_context=True)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(MessageHandler(Filters.text, verify_user))
    dp.add_error_handler(error)
    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()