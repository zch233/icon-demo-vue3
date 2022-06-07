// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined';

export interface ItalicOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ItalicOutlined: ItalicOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ItalicOutlinedSvg} />
    ;

ItalicOutlined.displayName = 'ItalicOutlined';

export default ItalicOutlined;