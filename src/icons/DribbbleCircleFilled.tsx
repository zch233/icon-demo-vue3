// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import DribbbleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled';

export interface DribbbleCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DribbbleCircleFilled: DribbbleCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={DribbbleCircleFilledSvg} />
    ;

DribbbleCircleFilled.displayName = 'DribbbleCircleFilled';

export default DribbbleCircleFilled;