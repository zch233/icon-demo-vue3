// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';

export interface TrophyFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TrophyFilled: TrophyFilledIconType = (props, context) => <Icon name='TrophyFilled' {...{ ...props, ...context.attrs }} icon={TrophyFilledSvg} />;

TrophyFilled.displayName = 'TrophyFilled';

export default TrophyFilled;