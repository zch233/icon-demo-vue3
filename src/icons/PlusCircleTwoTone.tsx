// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusCircleTwoTone';

export interface PlusCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PlusCircleTwoTone: PlusCircleTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={PlusCircleTwoToneSvg} />
    ;

PlusCircleTwoTone.displayName = 'PlusCircleTwoTone';

export default PlusCircleTwoTone;