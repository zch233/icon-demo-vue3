// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import WomanOutlinedSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined';

export interface WomanOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WomanOutlined: WomanOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={WomanOutlinedSvg} />
    ;

WomanOutlined.displayName = 'WomanOutlined';

export default WomanOutlined;