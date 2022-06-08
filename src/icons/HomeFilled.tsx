// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled';

export interface HomeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HomeFilled: HomeFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={HomeFilledSvg} />;

HomeFilled.displayName = 'HomeFilled';

export default FunctionalComponent;