// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayoutTwoTone';

export interface LayoutTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LayoutTwoTone: LayoutTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={LayoutTwoToneSvg} />
    ;

LayoutTwoTone.displayName = 'LayoutTwoTone';

export default LayoutTwoTone;