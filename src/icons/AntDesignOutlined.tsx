// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';

export interface AntDesignOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AntDesignOutlined: AntDesignOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AntDesignOutlinedSvg} />
    ;

AntDesignOutlined.displayName = 'AntDesignOutlined';

export default FunctionalComponent;