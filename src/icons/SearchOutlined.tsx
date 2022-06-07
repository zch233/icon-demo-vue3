// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined';

export interface SearchOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SearchOutlined: SearchOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SearchOutlinedSvg} />
    ;

SearchOutlined.displayName = 'SearchOutlined';

export default FunctionalComponent;