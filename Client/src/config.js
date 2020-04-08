const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-75e5vn6bes5i"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ne0yjhvize.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PwXXGkPcL",
    APP_CLIENT_ID: "579t51q82cihqaqr48kaf31n8r",
    IDENTITY_POOL_ID: "us-east-1:b29694a1-f18c-457c-bbcc-af1f1b89cfab"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-75e5vn6bes5i"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ne0yjhvize.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PwXXGkPcL",
    APP_CLIENT_ID: "579t51q82cihqaqr48kaf31n8r",
    IDENTITY_POOL_ID: "us-east-1:b29694a1-f18c-457c-bbcc-af1f1b89cfab"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
