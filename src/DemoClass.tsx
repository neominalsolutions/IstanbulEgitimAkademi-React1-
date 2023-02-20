//  2 türlü component geliştirebiliriz
// class based function based

import { Component, ReactNode } from "react";

// export ile aynı c# da yaptığımız gibi bir class başka bir ts dosyasında kullanacak şekilde dışarı çıkardık
// export keyword ile tanımlanan classlar başka bir js dosyasında import edilebilir

// Component kalıtım alarak extends keyword ile yaptık
// React class component açtık

export type DemoProps = {
  title: string;
};

// component içerisine DemoProps tipinde değerler göndereceğiz
// class component lifecyle hooks (componentWillUnmount, componentdidmount, componentDidUpdate)
export class DemoClass extends Component<DemoProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: DemoProps) {
    super(props); // base componente bu props değerlerini aktar
  }

  componentDidUpdate(
    prevProps: Readonly<DemoProps>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {}

  componentDidMount(): void {}

  componentWillUnmount(): void {}

  // props ise react özel tanımlı bir ifade olup componente dışarıdan gönderilen değerler için kullanılıyor.

  // render method sayesinde dinamik view oluşturuyoruz. dinamik view oluşturma yöntemine biz render işlemi diyoruz.
  render(): ReactNode {
    return (
      <div style={{ color: "red", padding: "10px" }}>{this.props.title}</div>
    );
  }
}
