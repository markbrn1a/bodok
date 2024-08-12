export const adminQuotationEmailTemplate = (data) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #007bff;
            color: #ffffff;
            padding: 10px 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
          }
          .content {
            padding: 20px;
          }
          .content h2 {
            color: #333333;
          }
          .content p {
            color: #666666;
            line-height: 1.6;
          }
          .quote-details {
            margin: 20px 0;
          }
          .quote-details table {
            width: 100%;
            border-collapse: collapse;
          }
          .quote-details th, .quote-details td {
            border: 1px solid #dddddd;
            padding: 8px;
            text-align: left;
          }
          .quote-details th {
            background-color: #f2f2f2;
          }
          .footer {
            text-align: center;
            padding: 10px 0;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Quotation</h1>
          </div>
          <div class="content">
            <h2>Hello ${data.customerName},</h2>
            <p>Thank you for requesting a quotation. Here are the details:</p>
            <div class="quote-details">
              <table>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                ${data.items
                  .map(
                    (item) => `
                  <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                  </tr>
                `
                  )
                  .join("")}
              </table>
            </div>
            <p><strong>Total Price: ${data.totalPrice}</strong></p>
            <p>If you have any questions, feel free to contact us.</p>
            <p>Best regards,</p>
            <p>Your Company Name</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
};

export const clientThankYouEmailTemplate = (data) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #28a745;
            color: #ffffff;
            padding: 10px 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
          }
          .content {
            padding: 20px;
          }
          .content h2 {
            color: #333333;
          }
          .content p {
            color: #666666;
            line-height: 1.6;
          }
          .footer {
            text-align: center;
            padding: 10px 0;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You!</h1>
          </div>
          <div class="content">
            <h2>Dear ${data.customerName},</h2>
            <p>Thank you for your recent request for a quotation. We appreciate your interest in our services.</p>
            <p>We have received your request and our team is currently working on preparing a detailed quotation for you. We will get back to you as soon as possible.</p>
            <p>If you have any immediate questions or need further assistance, please do not hesitate to contact us.</p>
            <p>Best regards,</p>
            <p>Your Company Name</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
};
