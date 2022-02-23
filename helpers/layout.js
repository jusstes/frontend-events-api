module.exports.layout = ({
  date, summary, link,
}) => `<table
  border="0"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  style="font-size: 1px; line-height: normal"
>
  <tbody>
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        align="center"
                        bgcolor="transparent"
                        style="
                          background-color: transparent;
                          border: 1px solid #ffffff;
                        "
                      >
                        <table
                          align="center"
                          bgcolor="transparent"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="background-color: transparent"
                        >
                          <tbody>
                            <tr>
                              <td align="center">
                              <div style="width: 200px; height: 200px; border-radius: 100%; overflow: hidden">
                                <img
                                  alt="Frontend Events"
                                  border="0"
                                  height="200"
                                  src="https://raw.githubusercontent.com/jusstes/frontend-events-api/main/helpers/js_events.png"
                                  width="200"
                                  style="display: block; border-radius=100%;"
                                />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  style="
                                    font-size: 5px;
                                    height: 25px;
                                    line-height: 5px;
                                  "
                                >
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="80%"
                        >
                          <tbody style="text-align: center">
                            <tr>
                              <td></td>
                              <td>
                                <font
                                  color="#333333"
                                  face="Arial, Helvetica, sans-serif"
                                  size="3"
                                  ><span
                                    style="
                                      color: #333333;
                                      font-family: 'arial', 'helvetica',
                                        sans-serif;
                                      font-size: 22px;
                                      line-height: 28px;
                                    "
                                    >Привет!
                                  </span>
                                </font>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody style="text-align: center">
                            <tr>
                              <td>
                                <div
                                  style="
                                    font-size: 5px;
                                    height: 15px;
                                    line-height: 5px;
                                  "
                                >
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          text-align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="80%"
                        >
                          <tbody style="text-align: center">
                            <tr>
                              <td></td>
                              <td>
                                <font
                                  color="#333333"
                                  face="Arial, Helvetica, sans-serif"
                                  size="3"
                                  ><span
                                    style="
                                      color: #333333;
                                      font-family: 'arial', 'helvetica',
                                        sans-serif;
                                      font-size: 18px;
                                      line-height: 22px;
                                    "
                                    >Напоминаем о Frontend мероприятии
                                    «${summary}», которое начнется ${date}.
                                  </span>
                                </font>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          text-align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="80%"
                        >
                          <tbody style="text-align: center">
                            <tr>
                              <td></td>
                              <td>
                                <font
                                  color="#333333"
                                  face="Arial, Helvetica, sans-serif"
                                  size="3"
                                  ><span
                                    style="
                                      color: #333333;
                                      font-family: 'arial', 'helvetica',
                                        sans-serif;
                                      font-size: 18px;
                                      line-height: 22px;
                                    "
                                    >Подробная информация по ссылке ${link}.
                                  </span>
                                </font>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody style="text-align: center">
                            <tr>
                              <td>
                                <div
                                  style="
                                    font-size: 5px;
                                    height: 25px;
                                    line-height: 5px;
                                  "
                                >
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          text-align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="80%"
                        >
                          <tbody style="text-align: center">
                            <tr>
                              <td></td>
                              <td>
                                <font
                                  color="#333333"
                                  face="Arial, Helvetica, sans-serif"
                                  size="3"
                                  ><span
                                    style="
                                      color: #333333;
                                      font-family: 'arial', 'helvetica',
                                        sans-serif;
                                      font-size: 14px;
                                      line-height: 18px;
                                    "
                                    >Письмо отправлено с помощью календаря фронтенд-мероприятий https://github.com/DanTrofimov/fe-calendar.
                                  </span>
                                </font>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody style="text-align: center">
                            <tr>
                              <td>
                                <div
                                  style="
                                    font-size: 5px;
                                    height: 15px;
                                    line-height: 5px;
                                  "
                                >
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          text-align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="80%"
                        >
                          <tbody style="text-align: center">
                            <tr>
                              <td></td>
                              <td>
                                <font
                                  color="#333333"
                                  face="Arial, Helvetica, sans-serif"
                                  size="3"
                                  ><span
                                    style="
                                      color: #333333;
                                      font-family: 'arial', 'helvetica',
                                        sans-serif;
                                      font-size: 14px;
                                      line-height: 18px;
                                    "
                                    >Спасибо, что ты с нами ❤️
                                  </span>
                                </font>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`;
