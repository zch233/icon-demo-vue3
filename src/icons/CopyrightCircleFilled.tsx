// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleFilled';

export interface CopyrightCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CopyrightCircleFilled: CopyrightCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CopyrightCircleFilledSvg} />
    ;

CopyrightCircleFilled.displayName = 'CopyrightCircleFilled';

export default FunctionalComponent;