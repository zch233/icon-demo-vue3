// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled';

export interface GoogleCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GoogleCircleFilled: GoogleCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={GoogleCircleFilledSvg} />
    ;

GoogleCircleFilled.displayName = 'GoogleCircleFilled';

export default FunctionalComponent;