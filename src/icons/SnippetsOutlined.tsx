// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import SnippetsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnippetsOutlined';

export interface SnippetsOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SnippetsOutlined: SnippetsOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={SnippetsOutlinedSvg} />
    ;

SnippetsOutlined.displayName = 'SnippetsOutlined';

export default SnippetsOutlined;