// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined';

export interface ConsoleSqlOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ConsoleSqlOutlined: ConsoleSqlOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ConsoleSqlOutlinedSvg} />
    ;

ConsoleSqlOutlined.displayName = 'ConsoleSqlOutlined';

export default FunctionalComponent;