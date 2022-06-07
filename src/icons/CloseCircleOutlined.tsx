// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined';

export interface CloseCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CloseCircleOutlined: CloseCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CloseCircleOutlinedSvg} />
    ;

CloseCircleOutlined.displayName = 'CloseCircleOutlined';

export default FunctionalComponent;