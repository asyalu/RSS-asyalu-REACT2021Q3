/* eslint-disable prettier/prettier */
interface TemplateParams {
  cssPath: string;
  jsPath: string;
  content: string;
  data?: string;
}

export function renderTemplate({
  cssPath, jsPath, content = '', data = '',
}: TemplateParams): string {
  return `<!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">    
          <title>React.SSR</title>
          <link href=/client/${cssPath} rel="stylesheet">
      </head>
      <body> 
        <div id="root">${content}</div>
      </body>
      <script defer src=/client/${jsPath}></script>
  </html>`;
}
