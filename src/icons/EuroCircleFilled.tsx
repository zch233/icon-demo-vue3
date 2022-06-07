// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EuroCircleFilledSvg from '@ant-design/icons-svg/lib/asn/EuroCircleFilled';

export interface EuroCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EuroCircleFilled: EuroCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EuroCircleFilledSvg} />
    ;

EuroCircleFilled.displayName = 'EuroCircleFilled';

export default FunctionalComponent;