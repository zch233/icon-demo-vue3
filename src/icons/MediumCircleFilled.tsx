// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MediumCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MediumCircleFilled';

export interface MediumCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MediumCircleFilled: MediumCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MediumCircleFilledSvg} />
    ;

MediumCircleFilled.displayName = 'MediumCircleFilled';

export default MediumCircleFilled;