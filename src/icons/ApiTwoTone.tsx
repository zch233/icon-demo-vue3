// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone';

export interface ApiTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ApiTwoTone: ApiTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ApiTwoToneSvg} />
    ;

ApiTwoTone.displayName = 'ApiTwoTone';

export default FunctionalComponent;