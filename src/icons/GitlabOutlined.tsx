// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import GitlabOutlinedSvg from '@ant-design/icons-svg/lib/asn/GitlabOutlined';

export interface GitlabOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GitlabOutlined: GitlabOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={GitlabOutlinedSvg} />
    ;

GitlabOutlined.displayName = 'GitlabOutlined';

export default FunctionalComponent;