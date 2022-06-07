// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DisconnectOutlinedSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined';

export interface DisconnectOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DisconnectOutlined: DisconnectOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DisconnectOutlinedSvg} />
    ;

DisconnectOutlined.displayName = 'DisconnectOutlined';

export default FunctionalComponent;