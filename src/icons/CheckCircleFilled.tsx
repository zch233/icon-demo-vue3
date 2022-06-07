// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled';

export interface CheckCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CheckCircleFilled: CheckCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CheckCircleFilledSvg} />
    ;

CheckCircleFilled.displayName = 'CheckCircleFilled';

export default CheckCircleFilled;